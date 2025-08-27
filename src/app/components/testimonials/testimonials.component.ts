import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-testimonials',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './testimonials.component.html',
    styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit, OnDestroy {
    currentSlide = 0;
    autoSlideInterval: any;

    testimonials = [
        {
            name: 'Maria Silva',
            role: 'Proprietária de Salão',
            location: 'São Paulo, SP',
            image: 'https://ui-avatars.com/api/?name=Maria+Silva&background=F3F4F6&color=111827&size=128',
            rating: 5,
            text: 'Os cursos da Gleica transformaram completamente meu salão...'
        },
        {
            name: 'Ana Costa',
            role: 'Terapeuta Capilar',
            location: 'Rio de Janeiro, RJ',
            image: 'https://ui-avatars.com/api/?name=Ana+Costa&background=F3F4F6&color=111827&size=128',
            rating: 5,
            text: 'Estava perdida na carreira até conhecer os cursos da Gleica...'
        },
        {
            name: 'Carla Mendes',
            role: 'Empreendedora',
            location: 'Belo Horizonte, MG',
            image: 'https://ui-avatars.com/api/?name=Carla+Mendes&background=F3F4F6&color=111827&size=128',
            rating: 5,
            text: 'Comecei do zero e hoje tenho minha própria clínica...'
        },
        {
            name: 'Juliana Santos',
            role: 'Tricologista',
            location: 'Brasília, DF',
            image: 'https://ui-avatars.com/api/?name=Juliana+Santos&background=F3F4F6&color=111827&size=128',
            rating: 5,
            text: 'A metodologia da Gleica é única. Consegui aprender técnicas...'
        }
    ];


    ngOnInit(): void {
        this.startAutoSlide();
    }

    ngOnDestroy(): void {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
        }
    }

    startAutoSlide(): void {
        this.autoSlideInterval = setInterval(() => {
            this.nextSlide();
        }, 5000);
    }

    nextSlide(): void {
        this.currentSlide = (this.currentSlide + 1) % this.testimonials.length;
    }

    prevSlide(): void {
        this.currentSlide = this.currentSlide === 0 ? this.testimonials.length - 1 : this.currentSlide - 1;
    }

    goToSlide(index: number): void {
        this.currentSlide = index;
    }

    getStars(rating: number): number[] {
        return Array(rating).fill(0);
    }
}