
// app/page.tsx or app/exchange/page.tsx
import Form from "@/app/ui/create-form";


export default function Page() {
  return (
      <main className="mx-auto max-w-xl p-6 bg-white">
          <h1 className="mb-4 text-2xl font-bold text-gray-800">
              Join the Language Exchange
          </h1>
          <p className="mb-6 text-gray-600">
              Fill out the form to get matched with someone who can help you learn or practice a language.
          </p>

          <Form/>
      </main>
  );
}

