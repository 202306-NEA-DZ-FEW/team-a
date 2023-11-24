import MailchimpSubscribe from "react-mailchimp-subscribe";

import NewsletterForm from "./NewsletterForm";

function Newsletter() {
  const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL || "/";

  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL}
      render={({ subscribe }) => (
        <NewsletterForm
          onValidated={async (formData) => {
            try {
              subscribe(formData);
            } catch (error) {
              // eslint-disable-next-line no-console
              console.error("Error subscribing:", error);
            }
          }}
        />
      )}
    />
  );
}

export default Newsletter;
