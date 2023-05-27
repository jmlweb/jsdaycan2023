import { z } from 'zod';

export const rawBeachSchema = z.object({
  Nombre: z.string(),
  Dirección: z.string().optional(),
  'C.P.': z.string().optional(),
  Municipio: z.string(),
  Pedanía: z.string().optional(),
  Teléfono: z.string().optional(),
  Email: z.string().optional(),
  'URL Real': z.string().optional(),
  'URL Corta': z.string().optional(),
  Latitud: z.string(),
  Longitud: z.string(),
  'Tipo Suelo': z.string().optional(),
  Oleaje: z.string().optional(),
  Ocupación: z
    .union([z.literal('Bajo'), z.literal('Medio'), z.literal('Alto')])
    .optional(),
  'Zona Fondeo': z.union([z.literal('No'), z.literal('Sí')]).default('No'),
  Nudista: z.union([z.literal('No'), z.literal('Sí')]).default('No'),
  Mar: z
    .union([z.literal('Mar Mediterráneo'), z.literal('Mar Menor')])
    .default('Mar Mediterráneo'),
  'Paseo Marítimo': z.union([z.literal('No'), z.literal('Sí')]).default('No'),
  'Tipo Acceso': z.string().optional(),
  'Bandera Azul': z.union([z.literal('No'), z.literal('Sí')]).default('No'),
  Acceso: z.string().optional(),
  Accesible: z.union([z.literal('No'), z.literal('Sí')]).default('No'),
  'Foto 1': z.string().optional(),
  'Foto 2': z.string().optional(),
  'Foto 3': z.string().optional(),
  'Foto 4': z.string().optional(),
  'Foto 5': z.string().optional(),
  'Foto 6': z.string().optional(),
  'Foto 7': z.string().optional(),
  'Foto 8': z.string().optional(),
  'Foto 9': z.string().optional(),
  'Foto 10': z.string().optional(),
});

export type RawBeach = z.infer<typeof rawBeachSchema>;

export const arrayOfThingsSchema = z.array(z.any());
