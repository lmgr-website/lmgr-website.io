const MEMBERSHIP_DEFAULT_TYPE = 'new';
const MEMBERSHIP_PAYPAL_URL = 'https://www.paypal.com/webapps/hermes?token=3BS18795P04973018&useraction=commit&rm=1&wpsFlowRedirectToXorouterSkipHermesStartTime=1775843916785&flowType=WPS&mfid=1775843916544_f7601334bbdd4';

function resolveInitialMembershipType() {
    const params = new URLSearchParams(window.location.search);
    const type = (params.get('type') || params.get('membershipType') || '').toLowerCase();

    if (type === 'renew' || type === 'renewal') {
        return 'renewal';
    }

    return MEMBERSHIP_DEFAULT_TYPE;
}

function applyMembershipType(form, membershipType) {
    const selectedOption = form.querySelector(`input[name="membershipType"][value="${membershipType}"]`);

    if (selectedOption) {
        selectedOption.checked = true;
    }
}

function buildMembershipSubmissionPayload(formData) {
    const firstName = formData.get('firstName').trim();
    const lastName = formData.get('lastName').trim();
    const phone = formData.get('phone').trim();

    return {
        membershipType: formData.get('membershipType'),
        firstName,
        lastName,
        fullName: `${firstName} ${lastName}`.trim(),
        mailingAddress: formData.get('mailingAddress').trim(),
        city: formData.get('city').trim(),
        province: formData.get('province').trim(),
        postalCode: formData.get('postalCode').trim(),
        email: formData.get('emailAddress').trim(),
        phone: phone || 'not provided',
        paymentMethod: formData.get('paymentMethod'),
        newsletterPreference: formData.get('newsletterPreference')
    };
}

function showConfirmation(formWrapper, confirmationPanel) {
    formWrapper.classList.add('is-hidden');
    confirmationPanel.classList.remove('is-hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showForm(formWrapper, confirmationPanel) {
    confirmationPanel.classList.add('is-hidden');
    formWrapper.classList.remove('is-hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function () {
    const membershipForm = document.getElementById('membershipForm');
    const formWrapper = document.getElementById('membershipFormWrapper');
    const confirmationPanel = document.getElementById('membershipConfirmation');
    const submitAnotherButton = document.getElementById('submitAnotherMembership');
    const paypalLinks = document.querySelectorAll('[data-membership-paypal-link]');

    if (!membershipForm || !formWrapper || !confirmationPanel || !submitAnotherButton) {
        return;
    }

    paypalLinks.forEach(function (link) {
        link.href = MEMBERSHIP_PAYPAL_URL;
    });

    const initialMembershipType = resolveInitialMembershipType();
    applyMembershipType(membershipForm, initialMembershipType);

    membershipForm.addEventListener('submit', function (event) {
        event.preventDefault();

        if (!membershipForm.reportValidity()) {
            return;
        }

        // Keep the future email payload transient so the site does not retain form data.
        const submissionPayload = buildMembershipSubmissionPayload(new FormData(membershipForm));

        membershipForm.reset();
        applyMembershipType(membershipForm, initialMembershipType);
        showConfirmation(formWrapper, confirmationPanel);
    });

    submitAnotherButton.addEventListener('click', function () {
        showForm(formWrapper, confirmationPanel);
    });
});
