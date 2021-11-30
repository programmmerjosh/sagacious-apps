const template = document.createElement('template');
template.innerHTML = `
<footer class="bg-black text-center py-5">
    <div class="container px-5">
        <div class="text-white-50 small">
            <div class="mb-2">&copy; Sagacious Apps Limited 2021. All Rights Reserved.</div>
            <a href="privacy">Privacy</a>
            <span class="mx-1">&middot;</span>
            <a href="faq">FAQs</a>
            <span class="mx-1">&middot;</span>
            <a href="disclaimer">Disclaimer</a>
        </div>
    </div>
</footer>

<!-- Feedback Modal-->
<div class="modal fade" id="feedbackModal" tabindex="-1" aria-labelledby="feedbackModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header bg-gradient-primary-to-secondary p-4">
                <h5 class="modal-title font-alt text-white" id="feedbackModalLabel">Contact Us</h5>
                <button class="btn-close btn-close-white" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body border-0 p-4">
                <!-- * * * * * * * * * * * * * * *-->
                <!-- * * SB Forms Contact Form * *-->
                <!-- * * * * * * * * * * * * * * *-->
                <!-- This form is pre-integrated with SB Forms.-->
                <!-- To make this form functional, sign up at-->
                <!-- https://startbootstrap.com/solution/contact-forms-->
                <!-- to get an API token!-->
                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <!-- Name input-->
                    <div class="form-floating mb-3">
                        <h5><em>Email:</em> <a href="mailto:info@sagaciousapps.com?subject=Mail from SagaciousApps.com">info@sagaciousapps.com</a></h5>
                        <!-- <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div> -->
                    </div>
                    <!-- Email address input-->
                    <div class="form-floating mb-3">
                      <i>
                        Please be advised that it could take up to 7-10 business days for us to get back to you.
                        Thank you for your patience.
                      </i>
                    </div>

                    </form>
            </div>
        </div>
    </div>
</div>
`

document.body.appendChild(template.content);
