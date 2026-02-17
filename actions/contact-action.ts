'use server'

import Airtable from 'airtable';
import { revalidatePath } from 'next/cache';

// Función auxiliar para Telegram (Más robusta que WhatsApp gratis)
async function notifyAdminTelegram(nombre: string, empresa: string, mensaje: string) {
    const token = process.env.TELEGRAM_BOT_TOKEN; // El que te dio BotFather
    const chatId = process.env.TELEGRAM_CHAT_ID;  // Tu ID numérico

    const text = `🧉 *Nuevo Lead mateTech*\n\n👤 *Nombre:* ${nombre}\n🏢 *Empresa:* ${empresa}\n💬 *Mensaje:* ${mensaje}`;

    try {
        await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text: text,
                parse_mode: 'Markdown'
            })
        });
    } catch (error) {
        console.error("Error Telegram:", error);
    }
}

export async function submitContact(formData: FormData) {
    const base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base(
        process.env.AIRTABLE_BASE_ID!
    );

    const nombre = formData.get('name') as string;
    const email = formData.get('email') as string;
    const mensaje = formData.get('message') as string;
    const empresa = formData.get('company') as string;

    try {
        // Guardar en Airtable
        await base('Contactos').create([
            {
                fields: {
                    Nombre: nombre,
                    Email: email,
                    Empresa: empresa,
                    Mensaje: mensaje,
                    Estado: 'Nuevo',
                },
            },
        ]);
        await notifyAdminTelegram(nombre, empresa, mensaje);
        
        return { success: true, message: '¡Mensaje recibido! Te responderemos pronto.' };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Hubo un error al enviar el mensaje.' };
    }
}