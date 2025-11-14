import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    
    console.log("Received contact form submission from:", formData.email);

    // Send email to Inovitty
    const emailResponse = await resend.emails.send({
      from: "Inovitty Contact Form <onboarding@resend.dev>",
      to: ["inovitty@gmail.com"],
      replyTo: formData.email,
      subject: `Nova mensagem de contato - ${formData.name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #2174c1 0%, #26bca6 100%);
                color: white;
                padding: 30px;
                border-radius: 12px 12px 0 0;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
              }
              .content {
                background: #f8f9fa;
                padding: 30px;
                border-radius: 0 0 12px 12px;
              }
              .field {
                margin-bottom: 20px;
                background: white;
                padding: 15px;
                border-radius: 8px;
                border-left: 4px solid #26bca6;
              }
              .field-label {
                font-weight: 600;
                color: #2174c1;
                margin-bottom: 5px;
                text-transform: uppercase;
                font-size: 12px;
                letter-spacing: 0.5px;
              }
              .field-value {
                color: #333;
                font-size: 15px;
              }
              .message-box {
                background: white;
                padding: 20px;
                border-radius: 8px;
                border: 1px solid #e0e0e0;
                white-space: pre-wrap;
                font-size: 15px;
                line-height: 1.6;
              }
              .footer {
                margin-top: 20px;
                padding-top: 20px;
                border-top: 1px solid #ddd;
                font-size: 12px;
                color: #666;
                text-align: center;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>📧 Nova Mensagem de Contato</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">Nome</div>
                <div class="field-value">${formData.name}</div>
              </div>
              
              <div class="field">
                <div class="field-label">E-mail</div>
                <div class="field-value">${formData.email}</div>
              </div>
              
              ${formData.phone ? `
              <div class="field">
                <div class="field-label">Telefone</div>
                <div class="field-value">${formData.phone}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="field-label">Mensagem</div>
                <div class="message-box">${formData.message}</div>
              </div>
              
              <div class="footer">
                <p>Você pode responder diretamente a este e-mail para entrar em contato com ${formData.name}</p>
                <p style="color: #26bca6; font-weight: 600;">Inovitty - Inovação com propósito na Educação</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    // Send confirmation email to the user
    await resend.emails.send({
      from: "Inovitty <onboarding@resend.dev>",
      to: [formData.email],
      subject: "Recebemos sua mensagem! - Inovitty",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #2174c1 0%, #26bca6 100%);
                color: white;
                padding: 40px;
                border-radius: 12px 12px 0 0;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 28px;
              }
              .content {
                background: #f8f9fa;
                padding: 30px;
                border-radius: 0 0 12px 12px;
              }
              .greeting {
                font-size: 18px;
                margin-bottom: 20px;
                color: #2174c1;
                font-weight: 600;
              }
              .message {
                background: white;
                padding: 20px;
                border-radius: 8px;
                margin: 20px 0;
                border-left: 4px solid #26bca6;
              }
              .footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #ddd;
                font-size: 14px;
                color: #666;
                text-align: center;
              }
              .signature {
                margin-top: 20px;
                font-style: italic;
                color: #26bca6;
                font-weight: 600;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>✨ Obrigado pelo contato!</h1>
            </div>
            <div class="content">
              <div class="greeting">Olá, ${formData.name}!</div>
              
              <div class="message">
                <p>Recebemos sua mensagem e agradecemos pelo interesse em transformar a educação com Inteligência Artificial.</p>
                
                <p>Nossa equipe irá analisar sua solicitação com atenção e retornaremos em breve para dar continuidade à conversa.</p>
                
                <p>Enquanto isso, sinta-se à vontade para explorar nosso conteúdo sobre inovação educacional e IA.</p>
              </div>
              
              <div class="footer">
                <p class="signature">Inovitty - Inovação com propósito na Educação</p>
                <p style="margin-top: 15px; font-size: 12px;">
                  Este é um e-mail automático. Por favor, não responda.<br>
                  Em caso de dúvidas, entre em contato através de inovitty@gmail.com
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
