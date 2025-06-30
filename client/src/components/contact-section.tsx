import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Contact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { Phone, Mail, MapPin, Send, Shield, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Call Us",
    primary: "(816) 258-1782",
    secondary: "Mon-Fri: 8AM-6PM\nSat: 8AM-4PM",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Us",
    primary: "info@HeartlandPoolCare.com",
    secondary: "We respond within 2 hours",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Service Area",
    primary: "Greater Metro Area",
    secondary: "30+ Mile Service Radius",
  },
];

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<Contact>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      poolType: "",
      serviceType: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: Contact) => {
      return await apiRequest("POST", "/api/contacts", data);
    },
    onSuccess: () => {
      toast({
        title: "Quote request sent!",
        description:
          "We'll contact you within 2 hours to discuss your pool service needs.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description:
          error.message || "Failed to send your request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: Contact) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 pool-navy-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Get Your Free Pool Cleaning Quote
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Ready to enjoy a crystal-clear pool? Contact us today for a free,
            no-obligation quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="glass-effect border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {info.title}
                  </h3>
                  <p className="text-blue-100 font-medium mb-1">
                    {info.primary}
                  </p>
                  <p className="text-blue-200 text-sm whitespace-pre-line">
                    {info.secondary}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-3">
            <Card className="glass-effect border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Request Your Free Quote
                </h3>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="First Name"
                                className="glass-effect border-white/20 text-white placeholder:text-blue-200"
                                required
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="Last Name"
                                className="glass-effect border-white/20 text-white placeholder:text-blue-200"
                                required
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="Email Address"
                                className="glass-effect border-white/20 text-white placeholder:text-blue-200"
                                required
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="Phone Number"
                                className="glass-effect border-white/20 text-white placeholder:text-blue-200"
                                required
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Property Address"
                              className="glass-effect border-white/20 text-white placeholder:text-blue-200"
                              required
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="poolType"
                        render={({ field }) => (
                          <FormItem>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              required
                            >
                              <FormControl>
                                <SelectTrigger className="glass-effect border-white/20 text-white">
                                  <SelectValue placeholder="Pool Type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="above-ground">
                                  Above Ground
                                </SelectItem>
                                <SelectItem value="in-ground">
                                  In-Ground
                                </SelectItem>
                                <SelectItem value="commercial">
                                  Commercial
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="serviceType"
                        render={({ field }) => (
                          <FormItem>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              required
                            >
                              <FormControl>
                                <SelectTrigger className="glass-effect border-white/20 text-white">
                                  <SelectValue placeholder="Service Needed" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="weekly-cleaning">
                                  Weekly Cleaning
                                </SelectItem>
                                <SelectItem value="bi-weekly-cleaning">
                                  Bi-Weekly Cleaning
                                </SelectItem>
                                <SelectItem value="one-time-cleaning">
                                  One-Time Cleaning
                                </SelectItem>
                                <SelectItem value="green-pool-recovery">
                                  Green Pool Recovery
                                </SelectItem>
                                <SelectItem value="equipment-repair">
                                  Equipment Repair
                                </SelectItem>
                                <SelectItem value="pool-opening">
                                  Pool Opening
                                </SelectItem>
                                <SelectItem value="pool-closing">
                                  Pool Closing
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea
                              required
                              placeholder="Tell us about your pool's current condition and any specific needs..."
                              className="glass-effect border-white/20 text-white placeholder:text-blue-200 min-h-[100px]"
                              {...field}
                              value={field.value || ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        required
                        className="border-white/20"
                      />
                      <label
                        htmlFor="terms"
                        className="text-blue-200 text-sm cursor-pointer"
                      >
                        I agree to receive communications about my pool service
                        request
                      </label>
                    </div>

                    <Button
                      type="submit"
                      disabled={contactMutation.isPending}
                      className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 rounded-full"
                    >
                      {contactMutation.isPending ? (
                        <>
                          <Clock className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Get My Free Quote
                        </>
                      )}
                    </Button>
                  </form>
                </Form>

                <div className="mt-6 text-center">
                  <p className="text-blue-200 text-sm flex items-center justify-center">
                    <Shield className="w-4 h-4 mr-2" />
                    Your information is secure and will never be shared
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Need Immediate Service?
          </h3>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 rounded-full mr-4"
            onClick={() => window.open("tel:+18162581782", "_blank")}
          >
            <Phone className="w-4 h-4 mr-2" />
            Call Now: (816) 258-1782
          </Button>
          <p className="text-blue-200 text-sm mt-2">
            Emergency service available 24/7
          </p>
        </div>
      </div>
    </section>
  );
}
