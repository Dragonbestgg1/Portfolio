<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Mail;
use App\Mail\YourMailClass; // Replace with your actual mailable class

class EmailController extends Controller
{
    public function sendEmail()
    {
        $data = [
            // Data to pass to your email template
        ];

        Mail::to('recipient@example.com')->send(new Mail($data));

        return response()->json(['message' => 'Email sent successfully!']); // Or redirect to a success page
    }
}
