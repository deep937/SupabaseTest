import { createClient } from "@/lib/supabase/server";

export default async function Page() {
  const supabase = await createClient();
  const { data: quotes } = await supabase
    .from("quotes")
    .select("*")
    .order("created_at", { ascending: false });

  console.log("Quotes:", quotes);

  return (
    <div className="flex flex-col items-center justify-center">
      {quotes.map((q) => (
          <p key={q.id} className="p-2">{q.quote}</p>
      ))}
    </div>
  );
}
