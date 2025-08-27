import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    achievements = [
        {
            icon: '👥',
            title: 'Mais de 5.000 alunos formados',
            description: 'Profissionais capacitados em todo o Brasil'
        },
        {
            icon: '🏆',
            title: 'Certificação internacional',
            description: 'Reconhecimento mundial em terapia capilar'
        },
        {
            icon: '🔬',
            title: 'Técnicas exclusivas desenvolvidas',
            description: 'Métodos inovadores e comprovados'
        },
        {
            icon: '⭐',
            title: '15+ anos de experiência',
            description: 'Expertise consolidada no mercado'
        }
    ];

    ngOnInit(): void { }
}