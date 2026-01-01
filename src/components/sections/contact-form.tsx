"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData, sanitize } from "@/lib/security";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Reveal } from "../reveal";
import { logger } from "@/lib/logger";

export default function ContactForm() {
    const { toast } = useToast();
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        // Sanitize inputs before sending (redundant with Zod but good practice for raw strings)
        const cleanData = {
            name: sanitize(data.name),
            email: sanitize(data.email),
            phone: data.phone ? sanitize(data.phone) : undefined,
            message: sanitize(data.message),
        };

        if (process.env.NODE_ENV !== 'production') {
            logger.info({ cleanData }, "Secure Form Submit");
        }

        toast({
            title: "Mensaje Enviado",
            description: "Nos pondremos en contacto pronto.",
        });
        reset();
    };

    return (
        <section className="py-24 bg-neutral-900 border-t border-white/5 relative overflow-hidden" id="contacto">
            <div className="container mx-auto px-4 relative z-10">
                <Reveal>
                    <div className="text-center mb-16">
                        <h2 className="brand-title text-4xl md:text-5xl text-white mb-4">CONTÁCTANOS</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            ¿Necesitas leña para tu negocio? Escríbenos para una cotización formal.
                        </p>
                    </div>
                </Reveal>

                <div className="max-w-xl mx-auto bg-card/5 border border-white/10 p-8 rounded-lg backdrop-blur-sm">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-300">Nombre / Negocio</label>
                                <Input
                                    {...register("name")}
                                    className="bg-black/50 border-white/10 text-white placeholder:text-gray-600 focus:border-primary"
                                    placeholder="Tu nombre o Restaurante"
                                />
                                {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium text-gray-300">Teléfono</label>
                                <Input
                                    {...register("phone")}
                                    className="bg-black/50 border-white/10 text-white placeholder:text-gray-600 focus:border-primary"
                                    placeholder="+57 300..."
                                />
                                {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message}</span>}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-300">Correo Electrónico</label>
                            <Input
                                {...register("email")}
                                type="email"
                                className="bg-black/50 border-white/10 text-white placeholder:text-gray-600 focus:border-primary"
                                placeholder="contacto@tuempresa.com"
                            />
                            {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-300">Mensaje</label>
                            <Textarea
                                {...register("message")}
                                className="bg-black/50 border-white/10 text-white placeholder:text-gray-600 focus:border-primary min-h-[120px]"
                                placeholder="Necesito cotizar bultos de leña de roble..."
                            />
                            {errors.message && <span className="text-red-500 text-xs">{errors.message.message}</span>}
                        </div>

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-primary hover:bg-primary/80 text-white font-headline tracking-widest py-6 text-lg"
                        >
                            {isSubmitting ? "ENVIANDO..." : "ENVIAR MENSAJE"}
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}
