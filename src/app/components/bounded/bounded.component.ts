import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { twMerge } from "tailwind-merge";

@Component({
  selector: 'app-bounded',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bounded.component.html',
  styleUrl: './bounded.component.css'
})
export class BoundedComponent {
  @Input() className: string = '';

  getClasses(): string {
    return twMerge('px-3 w-full max-w-[var(--max-w-bounded)] mx-auto', this.className);
  }
}
