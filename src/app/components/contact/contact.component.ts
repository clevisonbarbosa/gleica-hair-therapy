import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    contactForm = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    };

    isSubmitting = false;
    submitMessage = '';

    contactInfo = [
        {
            icon: '📧',
            title: 'Email',
            value: 'contato@gleicavilela.com',
            link: 'mailto:contato@gleicavilela.com'
        },
        {
            icon: '📱',
            title: 'WhatsApp',
            value: '(11) 99999-9999',
            link: 'https://wa.me/5511999999999'
        },
        {
            icon: '📍',
            title: 'Localização',
            value: 'São Paulo, SP',
            link: '#'
        },
        {
            icon: '🕒',
            title: 'Horário',
            value: 'Seg-Sex: 9h às 18h',
            link: '#'
        }
    ];

    ngOnInit(): void { }

    onSubmit(): void {
        if (this.isValidForm()) {
            this.isSubmitting = true;

            // Simular envio do formulário
            setTimeout(() => {
                this.isSubmitting = false;
                this.submitMessage = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
                this.resetForm();

                // Limpar mensagem após 5 segundos
                setTimeout(() => {
                    this.submitMessage = '';
                }, 5000);
            }, 2000);
        }
    }

    isValidForm(): boolean {
        return !!(this.contactForm.name &&
            this.contactForm.email &&
            this.contactForm.message);
    }

    resetForm(): void {
        this.contactForm = {
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        };
    }

    openLink(link: string): void {
        if (link !== '#') {
            window.open(link, '_blank');
        }
    }
}