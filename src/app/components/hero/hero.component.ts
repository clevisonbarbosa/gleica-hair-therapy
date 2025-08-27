import { Component, type OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
    selector: "app-hero",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./hero.component.html",
    styleUrls: ["./hero.component.scss"],
})
export class HeroComponent implements OnInit {
    stats = [
        { number: "5000+", label: "Alunos Formados" },
        { number: "15+", label: "Anos de Experiência" },
        { number: "98%", label: "Satisfação" },
        { number: "50+", label: "Técnicas Exclusivas" },
    ]

    ngOnInit(): void { }

    scrollToSection(sectionId: string): void {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }
}
