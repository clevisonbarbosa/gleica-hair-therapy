import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    currentYear = new Date().getFullYear();

    quickLinks = [
        { name: 'Início', href: '#hero' },
        { name: 'Sobre', href: '#about' },
        { name: 'Cursos', href: '#courses' },
        { name: 'Depoimentos', href: '#testimonials' },
        { name: 'Contato', href: '#contact' }
    ];

    courses = [
        { name: 'Terapia Capilar Básica', href: '#' },
        { name: 'Terapia Capilar Avançada', href: '#' },
        { name: 'Master em Terapia Capilar', href: '#' }
    ];

    socialLinks = [
        { name: 'Instagram', href: '#', icon: 'instagram' },
        { name: 'WhatsApp', href: '#', icon: 'whatsapp' },
        { name: 'Facebook', href: '#', icon: 'facebook' },
        { name: 'YouTube', href: '#', icon: 'youtube' }
    ];

    ngOnInit(): void { }

    scrollToSection(sectionId: string): void {
        const element = document.getElementById(sectionId.replace('#', ''));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    openLink(href: string): void {
        if (href.startsWith('#')) {
            this.scrollToSection(href);
        } else {
            window.open(href, '_blank');
        }
    }
}