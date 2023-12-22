+++
template = "index.html"
title = "r3ply 📬: commenting, as simple as email"
description = "💬 Add comments to your website easily ✨ with r3ply, the email based commenting system 📥"
+++

## A Commenting System as Simple as Email

r3ply makes adding comments to your website easy by allowing your readers to submit them via email. This allows readers to comment without having to sign up for - **yet another™️** - account, while still allowing sites to moderate their content.

I made r3ply because I wanted a commenting system for [my own website](https://spenc.es/) that was simple and easy for my site's visitors. Technically, r3ply integrates well with both static and dynamic website sites.

To see a demo of r3ply, and learn more about how it works, check out the [the post](https://spenc.es/writing/email-as-a-commenting-system/) where I introduce it.

## Features:
* Users can submit comments to your site via email
* Email addresses are automatically redacted before being published
* Comments can be reviewed before they going live
* Modular design means bring your own build (or backend)

!["Screen recording of using r3ply"](/screenrecording_md.webp "Your email client is probably a lot nicer for writing than the browser. For example, drafts are automatically saved and you can scroll through the article as you think abobut you're writing.")

## Benefits:
1. Everyone already has email!
2. Good balance between UX and moderating spam or offensive content
3. Email gives you a lot of useful features for free:
    * Draft comments that can be saved and resumed later
    * Comment history in the form of their email archive
    * Emails are naturally threaded, like comments
    * A robust text editor that's already battle tested
    * Some degree of prebuilt spam detection
    * Users can scroll through content while they prepare their draft
    * And many more!

## FAQ:

Currently I'm asking the internet for feedback to see if it's worth open sourcing. In the meanwhile, until there's documentation, I will add common questions/answers here.

**Feel free to [write a comment](https://spenc.es/writing/email-as-a-commenting-system/#comments) on the original [announcement](https://spenc.es/writing/email-as-a-commenting-system/) thread, or to just [contact me](https://spenc.es/contact/) directly. Thanks for reading!**

<div class="px-4 border border-[#020D2B] rounded-xl">

### What is the timeline for this project?
r3ply **works today** and you can [demo it](https://spenc.es/writing/email-as-a-commenting-system/#comments) now. However, I'm still waiting to get feedback before open sourcing the project.

Who knows? Maybe people will think it's the worst thing ever, and no-one would ever use it. If that's the case, then I can save myself the trouble. If it's positively received though, then I'll open source the code, and future development will happen in public.

### What about privacy?
Emails addresses are automatically converted to private but unique hashes before comments are published.

### What about email "spoofing"?
r3ply performs `dkim`, `dmarc`, and `spf` checks against the sender's email address, and includes a checkmark if they pass.

### Can people choose a "nickname" to associate with a comment?
In the future, maybe.

I actually have this implemented, but not released, where it parses a nickname from the email's "signature". That feels elegant, but I still think a nickname needs to be more intentional to be a good UX.

Basically I'm worried people won't know they're leaving a nickname, and I'm worried about being perceived as breaking that trust. This is true especially because practically everyone's email clients will automatically include some kind of signature.

### What content can be submitted in the emails?
Personally, I allow a subset of markdown, but that would be up to you as the site moderator. r3ply can be configured however to reject emails that go beyond a certain threshold, in terms of size.

### What is the actual flow of data?
Here's an example taken from the [initial post](https://spenc.es/writing/email-as-a-commenting-system/#comments).

<div class="md:hidden bg-slate-900 border border-red-400 not-prose py-4">

!["A high level diagram showing the flow of data"](high-level-arch_v.webp "The flow of data is circular, beginning and ending with building/rendering of the site.")

</div>

<div class="hidden md:block bg-slate-900 border border-red-400 not-prose">

!["A high level diagram showing the flow of data"](high-level-arch_h.webp "The flow of data is circular, beginning and ending with building/rendering of the site.")

</div>

### How do I integrate r3ply with my site?
For the time being, I just just have a GitHub "integration" built, for my own site's needs, however in the future further integrations can be built and you can also easily author your own and expose a webhook.

### How does content moderation work?
If moderation is enabled, site owners will be notified when new comments have been received, where they can approve or reject submissions, as well as block malicious users.

### Where does r3ply run?
The inbound email portion of r3ply currently uses [Cloudflare’s email workers](https://workers.cloudflare.com) to run. Its resource requirements fits comfortably within their free tier.

### What if I want to run r3ply on my own infrastructure?
If you want to bring r3ply to some other infrastructure then great! [contact me](https://spenc.es/contact/) and let’s talk more about it.

### Is there a managed version of it?
Currently no, but if it becomes popular then maybe a service could be made out of it.

### How does r3ply know from an email where a comment should go on my site?
r3ply uses information in the subject line of the email to embed where a comment is intended to go.

### How does this subject line get in the email to begin with?
When the user clicks a “comment” button, they’re actually clicking a mailto link that pre-populates the necessary information.

### What prevents a malicious user from tampering with the subject line?
r3ply will compare a hash of the subject line to a precomputed one, and if they differ it will reject the email.

### What is included in the `mailto` links?
It includes the sender, as well as instructions that are in the email body. However, most importantly is the subject line which includes what the comment is replying to, as well as a hash to prevent accidents or tampering.

### How does this `mailto` link get generated?
Your site needs to build it, since only your site knows where comments should go in the HTML.

### How do emails help with moderation?
Because if users spam or are otherwise malicious, then their email address can be blocked. It's similar to how many sites trust sending an email to perform a 'password reset', but in reverse. See [above](#what-about-email-spoofing) for concerns about email spoofing.

### Can’t they just use another email address?
Yes, but then that one can be blocked too, and using multiple email addresses is a problem for traditional account signups as well.

### Do users receive a notification that their comment was successfully submitted?
Yes, currently r3ply will auto reply to their email notifying them that their comment has been received. [Let me know](https://spenc.es/contact) if this isn't good UX.

### What future features are planned?

I'd really like to get more feedback before proceeding, however here are a few ideas I have:

* Open source the code and allow for the community to author their own backends to allow for one click integration
* Being able to manage comments by replying to your email. For example:
> [scenario 1:] a user comments and receives an autoreply from r3ply, notifying them that their comment succeeded, with a preview to their comment. Then they noticed their comment had a typo. With this feature they could just reply `UPDATE <fixes typo>`.

> [scenario 2:] A moderator receives an email, notifying them of a new comment. Without leaving their email client, they could simply reply `APPROVE`, `REJECT`, or `BLOCK` and it would be done for them.

* Allowing for 'nicknames' to be associated with comments, by allowing users to sign their email

If you have any more ideas, please [let me know](https://spenc.es/contact)!

</div>