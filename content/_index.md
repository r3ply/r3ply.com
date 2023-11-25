+++
template = "index.html"
title = "📬 r3ply: comment submissions via email"
description = "r3ply makes adding comments to your website as simple as sending an email."
+++

## A commenting system as simple as email

r3ply makes adding commenting system to your website easy by allowing your readers to submit their comments via email. This website is meant to demo the concept and solicit feedback from the internet before I take the next steps of open sourcing the code.

I made r3ply because I wanted to add a commenting system to my site that didn’t require people to sign up for an account, while still allowing for content moderation. r3ply integrates well with both static and dynamic website sites.

Once I’ve iterated on the feedback I receive here, r3ply will be made free and licensed as open source! In the meanwhile, read on to learn more about its features and how it works. Or just scroll to the bottom to try it out try it out yourself.

And if you have any questions or feedback, just leave a comment!

## Table of Contents

* How it works
* Features
* Why email?
* FAQ
* Questions or Comments?

## How it works:

1. A site visitor clicks “comment” which begins a draft in their email
2. When they’re ready they just hit send
3. Done! The comment is enqueued to become html on your site.

## Features:
1. Comments can be configured to require approval before going live
2. Tasks like content moderation or editing can be done from within email thread
3. Modular system allows r3ply to work with any backend or build system. Works great with static sites!

[Embedded video]

## Benefits to r3ply:
1. Email is something everyone already has, providing an easy way to receive comments with requiring signup
2. Allows for a good balance between good user experience while also  preventing spam or offensive content
3. You get for free a lot of useful features right out of the box, like drafts but also much more!

## FAQ:

Below are some commonly asked questions. Feel free to ask for more details to anything not explained here.

<details class="pt-6 px-4 open:border border-[#020D2B] rounded-xl">

<summary class="hover:cursor-pointer">Click to expand</summary>

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
</details>

## Comments

[comments]