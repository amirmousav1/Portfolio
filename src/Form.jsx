import { useForm, ValidationError } from "@formspree/react";
import { formspreeEndpoint } from "./CustomizePortfolio";

function Form() {
  const [state, handleSubmit] = useForm(formspreeEndpoint);
  if (state.succeeded) {
    return (
      <p className="text-primary">
        Thank you for reaching out! I&apos;ve received your message and will get
        back to you as soon as possible. Have a great day!
      </p>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2 mb-6">
        <label className="font-medium" htmlFor="fullName">
          Name
        </label>
        <input
          required
          className="h-[46px] rounded-[4px] md:h-[51px] w-full bg-[#1A1A1A] focus:outline-none px-4 text-white"
          id="fullName"
          type="text"
          name="fullName"
        />
      </div>

      <div className="flex flex-col gap-2 mb-6">
        <label className="font-medium" htmlFor="email">
          Email Address
        </label>
        <input
          required
          id="email"
          type="email"
          name="email"
          className="h-[46px] rounded-[4px] md:h-[51px] w-full bg-[#1A1A1A] focus:outline-none px-4 text-white"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="flex flex-col gap-2 mb-6">
        <label className="font-medium" htmlFor="subject">
          Subject
        </label>
        <input
          className="h-[46px] rounded-[4px] md:h-[51px] w-full bg-[#1A1A1A] focus:outline-none px-4 text-white"
          id="subject"
          type="text"
          name="subject"
        />
      </div>
      <div className="flex flex-col gap-2 mb-6">
        <label className="font-medium" htmlFor="message">
          Message
        </label>
        <textarea
          required
          id="message"
          name="message"
          className="h-[156px] w-full rounded-[4px] bg-[#1A1A1A] focus:outline-none py-3 px-4 text-white"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button
        className="mt-4 bg-primary text-[#0A0A0A] font-bold py-[19px] px-10 rounded-full leading-[100%]"
        type="submit"
        disabled={state.submitting}
      >
        {state.submitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

export default Form;
