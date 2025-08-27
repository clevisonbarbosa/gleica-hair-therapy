import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-courses',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
    courses = [
        {
            id: 1,
            title: 'Terapia Capilar Básica',
            description: 'Fundamentos essenciais da terapia capilar para iniciantes. Aprenda as bases sólidas para começar sua jornada.',
            price: 'R$ 297',
            originalPrice: 'R$ 497',
            duration: '40h de conteúdo',
            image: 'assets/images/curso-basico.png',
            features: [
                'Anatomia e fisiologia capilar',
                'Diagnóstico básico',
                'Técnicas fundamentais',
                'Certificado de conclusão'
            ],
            popular: false,
            link: '#' // Substitua pelo link real
        },
        {
            id: 2,
            title: 'Terapia Capilar Avançada',
            description: 'Técnicas avançadas para profissionais experientes. Domine métodos exclusivos e diferenciados.',
            price: 'R$ 497',
            originalPrice: 'R$ 797',
            duration: '60h de conteúdo',
            image: 'assets/images/curso-avancado.png',
            features: [
                'Técnicas avançadas exclusivas',
                'Tratamentos especializados',
                'Casos complexos',
                'Mentoria individual'
            ],
            popular: true,
            link: '#' // Substitua pelo link real
        },
        {
            id: 3,
            title: 'Master em Terapia Capilar',
            description: 'Formação completa com certificação internacional. Torne-se um especialista reconhecido mundialmente.',
            price: 'R$ 897',
            originalPrice: 'R$ 1.297',
            duration: '120h de conteúdo',
            image: 'assets/images/curso-master.png',
            features: [
                'Certificação internacional',
                'Técnicas exclusivas',
                'Suporte vitalício',
                'Rede de profissionais'
            ],
            popular: false,
            link: '#' // Substitua pelo link real
        }
    ];

    ngOnInit(): void { }

    openCourseLink(link: string): void {
        window.open(link, '_blank');
    }
}