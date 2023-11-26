+++
template = "index.html"
title = "📬 r3ply: comment submissions via email"
description = "r3ply makes adding comments to your website as simple as sending an email."
+++

## A Commenting System as Simple as Email

r3ply makes adding comments to your website easy by allowing your readers to submit them via email. This allows readers to comment with signing up for, yet another, account, while also allowing site's to moderate their content.

I made r3ply because I wanted to a commenting system for [my own website](/todo) that was flexible for myself and my site's visitors. r3ply integrates well with both static and dynamic website sites.

To see a demo of r3ply, and learn more about how it works, check out the [the post](/todo) where I introduce it.

## Features:
* User's can submit comments to your site via email
* Email addresses are automatically redacted before being published
* Comments can be reviewed before they going live
* Modular design means bring your own build (or backend)

[Embedded video]

## Benefits:
1. Everyone already has email!
2. Good balance between UX and moderating spam or offensive content
3. Email gives you for free a lot of useful features that you don't have to build:
    * Draft comments that can be saved and resumed later
    * Comment history in the form of their archive
    * Emails are naturally threaded
    * A robust text editor that's already battle tested
    * Some degree of prebuilt spam detection
    * Users can scroll through content while they prepare their draft

## FAQ:

Below are some commonly asked questions. Feel free to ask for more details to anything not explained here.

<div class="px-4 border border-[#020D2B] rounded-xl">

### What about privacy?
Emails addresses are automatically converted to private but unique hashes before comments are published.

### How do I integrate r3ply with my at site?
You can configure how you want comments to enter your site’s pipeline. r3ply offers some integrations already, with more on the way, but you can also easily author your own and expose  a webhook.

### What integrations exist at this moment?
I currently use a flow where comments are added via GitHub. This works well for static sites, but dynamic sites would be even easier.

### How does content moderation work?
If moderation is enabled, site owners will be notified when new comments have been received, where they can approve or reject submissions, as well as block malicious users.

### Where does r3ply run?
The inbound email portion of r3ply currently uses cloudflare’s email workers to run. Its resource requirements fits comfortably within their free tier.

### What if I want to run r3ply on my own infrastructure?
If you want to bring r3ply to some other infrastructure then great! Submit an issue and let’s talk more about it.

### Is there a managed version of it?
Currently no, but if it becomes popular then maybe a service could be made out of it.

### How does r3ply know from an email where a comment should go on my site?
r3ply uses information in the subject line of the email to embed where a comment is intended to go.

### How does this subject line get in the email to begin with?
When the use clicks a “comment” button, they’re actually clicking a mailto link that pre-populates the necessary information.

### How does this mailto link get generated?
Your site needs to build it.

### What prevents a malicious user from tampering with the subject line?
r3ply will compare a hash of the subject line to a precomputed one, and if they differ it will reject the email.

### How does users sending an email help with moderation?
Because if they spam or are otherwise malicious that email address can be blocked.

### Can’t they just use another email address?
Yes, but then that one can be blocked too, and using multiple email addresses is a problem for traditional account signups as well.

### Do users receive a notification that their comment was successfully submitted?
Yes, currently r3ply will auto reply to their email notifying them that their comment has been received.
</div>