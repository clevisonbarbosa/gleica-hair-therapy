import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { HeaderComponent } from "./components/header/header.component"
import { HeroComponent } from "./components/hero/hero.component"
import { AboutComponent } from "./components/about/about.component"
import { CoursesComponent } from "./components/courses/courses.component"
import { TestimonialsComponent } from "./components/testimonials/testimonials.component"
import { ContactComponent } from "./components/contact/contact.component"
import { FooterComponent } from "./components/footer/footer.component"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    CoursesComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <div class="min-h-screen bg-white scroll-smooth">
      <app-header></app-header>
      <main>
        <app-hero></app-hero>
        <app-about></app-about>
        <app-courses></app-courses>
        <app-testimonials></app-testimonials>
        <app-contact></app-contact>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Gleica Vilela - Cursos de Terapia Capilar"
}
