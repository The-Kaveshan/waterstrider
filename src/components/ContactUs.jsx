import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Label, TextField } from "@/components/Fields";

export function ContactUs() {
  return (
    <footer className="border-t border-gray-200 bg-gray-100" id="contact">
      <Container>
        <div className="flex flex-col pb-6 pt-16 lg:flex-row lg:py-16">
          <div className="relative z-10  w-2/5 lg:col-span-4 lg:max-w-none lg:pt-6 xl:col-span-3">
            <h1 className="text-4xl font-medium tracking-tight text-gray-900">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Your feedback and inquiries are important to us. Fill out the form
              to get in touch, and one of our team members will respond as soon
              as possible.
            </p>
          </div>
          <div className="group relative mx-auto flex items-center self-stretch p-4 transition-colors sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
            <div className="ml-8 w-3/5">
              <form className="space-y-4">
                <div>
                  <Label id={"name"}>Name</Label>
                  <TextField
                    type="text"
                    aria-label="Name"
                    placeholder="Enter your name"
                    required
                    className="w-60 min-w-0 shrink"
                  />
                </div>
                <div>
                  <Label id={"email"}>Email</Label>
                  <TextField
                    type="email"
                    aria-label="Email address"
                    placeholder="Email address"
                    autoComplete="email"
                    required
                    className="w-60 min-w-0 shrink"
                  />
                </div>
                <div>
                  <Label id={"message"}>Message</Label>
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    className="block h-2 w-full appearance-none rounded-lg border border-gray-200 bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                    required
                  ></textarea>
                </div>
                <div>
                  <Button type="submit" color="cyan" className="ml-4 flex-none">
                    <span className="hidden lg:inline">Submit</span>
                    <span className="lg:hidden">Submit</span>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
