import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "Can I use this for both online and in-person classes?",
      answer:
        "Yes! YogaFlow supports both online and in-person classes. For online classes, we automatically generate Zoom links. For in-person classes, you can set location details and capacity limits.",
    },
    {
      question: "Do you support Zoom/Google Calendar?",
      answer:
        "We have built-in integrations with Zoom for video classes and Google Calendar for seamless scheduling. Your students' bookings automatically sync with their calendars.",
    },
    {
      question: "What's the cost?",
      answer:
        "We offer a free trial with no credit card required. After your trial, we have flexible plans starting at just $10/month and you can cancel anytime.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Frequently asked questions</h2>
          <p className="text-lg text-muted-foreground text-balance">Everything you need to know about YogaFlow.</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-xl border-border/50 px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
