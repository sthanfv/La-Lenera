import { describe, it, expect } from 'vitest';
import { sanitize, contactFormSchema } from './security';

describe('Security Utils - Sanitization', () => {
    it('should strip malicious script tags', () => {
        const maliciousInput = '<script>alert("xss")</script>Hello';
        const cleanOutput = sanitize(maliciousInput);
        expect(cleanOutput).toBe('Hello');
    });

    it('should strip event handlers from elements', () => {
        const maliciousInput = '<img src=x onerror=alert(1)>';
        const cleanOutput = sanitize(maliciousInput);
        expect(cleanOutput).toBe('');
    });

    it('should allow plain text', () => {
        const safeInput = 'Venta de leña en Bogotá';
        const cleanOutput = sanitize(safeInput);
        expect(cleanOutput).toBe(safeInput);
    });
});

describe('Security Utils - Validation Schemas', () => {
    it('should validate correct contact form data', () => {
        const validData = {
            name: 'Restaurante El Roble',
            email: 'contacto@restaurante.com',
            message: 'Me gustaría cotizar 50 bultos de leña de roble seco.',
        };
        const result = contactFormSchema.safeParse(validData);
        expect(result.success).toBe(true);
    });

    it('should reject invalid emails', () => {
        const invalidData = {
            name: 'Test',
            email: 'not-an-email',
            message: 'Short',
        };
        const result = contactFormSchema.safeParse(invalidData);
        expect(result.success).toBe(false);
    });
});
