import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Label, TextField } from "@/components/Fields";
import { PageTitle } from "@/components/PageTitle";
export function ContactUs() {
  return (
    <footer className="border-t border-gray-200 bg-gray-100" id="contact">
      <Container>
        <div className="flex flex-col items-center pb-6 pt-16 lg:flex-row lg:py-16">
          <div className="relative z-10 w-full lg:w-3/5 lg:max-w-none lg:pt-6">
            <PageTitle
              title={`Get in Touch`}
              subtitle={`Your feedback and inquiries are important to us. Fill out the form
              to get in touch, and one of our team members will respond as soon
              as possible.`}
            />
          </div>
          <div className="group relative mx-auto mt-6 flex w-full lg:w-2/5 items-center justify-center p-4 transition-colors sm:rounded-2xl lg:mx-0 lg:mt-0  lg:p-6 px-0">
            <form className="space-y-4 w-full">
              <div>
                <Label id={"name"}>Name</Label>
                <TextField
                  type="text"
                  aria-label="Name"
                  placeholder="Please enter your name"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Label id={"email"}>Email</Label>
                <TextField
                  type="email"
                  aria-label="Email address"
                  placeholder="Please enter your email address"
                  autoComplete="email"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Label id={"message"}>Message</Label>
                <textarea
                  placeholder="Share your thoughts or questions with us"
                  name="message"
                  id="message"
                  rows="5"
                  className="block w-full h-24 max-h-96 appearance-none rounded-lg border border-gray-200 bg-white py-2 px-3 text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 text-xs sm:text-sm"
                  required
                ></textarea>
              </div>
              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="ml-4 flex-none bg-sky-600 hover:bg-sky-800 items-right"
                >
                  <span className="hidden lg:inline">Submit</span>
                  <span className="lg:hidden">Submit</span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </footer>
  );
}
