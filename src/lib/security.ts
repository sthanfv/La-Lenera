import { z } from 'zod';
import DOMPurify from 'isomorphic-dompurify';

/**
 * Input Validation Schemas
 */

export const contactFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters").max(100),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Sanitization Utilities
 */

export const sanitize = (input: string): string => {
    return DOMPurify.sanitize(input, {
        ALLOWED_TAGS: [], // Strip all tags (strict text only)
        ALLOWED_ATTR: []
    });
};

export const sanitizeHtml = (input: string): string => {
    return DOMPurify.sanitize(input);
};
