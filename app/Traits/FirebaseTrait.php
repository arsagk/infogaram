<?php

namespace App\Traits;
use App\Models\UserFirebase;
use Illuminate\Http\Request;
use Kreait\Firebase\Messaging\CloudMessage;

trait FirebaseTrait {

    public function sendMessageToMobile($title, $body, $permission, $data=[])
    {
        $userfb = UserFirebase::whereHas('user', function($q) use($permission){
            $q->whereHas('roles', function($q) use($permission) {
                $q->whereHas('permissions',function($q) use($permission){
                    $q->where('name','like',$permission);
                });
            });
        })->whereNotNull('fcmTokenMobile')->pluck('fcmTokenMobile')->toArray();
        $deviceTokens = $userfb;
        $messaging = app('firebase.messaging');
        if (count($deviceTokens) > 0) {

            $message = CloudMessage::fromArray([
                'notification' => [
                    'title' => $title,
                    'body' => $body,
                ],
                "data"=>[
                    $data
                ]
            ]);

            $messaging->sendMulticast($message, $deviceTokens);

            return response()->json(['success' => true, 'message' => 'send notification sukses']);
        }

        return response()->json(['success' => false, 'message' => "send message fail "]);
    }

    public function sendMessageToUserMobile($title, $body, $user_id, $data=[])
    {
        $deviceToken = UserFirebase::where('user_id', '=', $user_id)
        ->whereNotNull('fcmTokenMobile')->pluck('fcmTokenMobile')->first();
        $messaging = app('firebase.messaging');
        if ($deviceToken) {
            $message = CloudMessage::fromArray([
                'notification' => [
                    'title' => $title,
                    'body' => $body,
                ],
                "data"=>[
                    $data
                ]
            ]);
            $messaging->sendMessage($message, $deviceToken);
            return response()->json(['success' => true, 'message' => 'send notification sukses']);
        }
        return response()->json(['success' => false, 'message' => "send message fail "]);
    }

}
