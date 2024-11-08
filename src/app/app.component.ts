import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AppService } from './app.service';
import { ScreenshotComponent } from './screenshot/screenshot.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ScreenshotComponent, ScreenshotComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cantpay';
  appservice = inject(AppService);

  ngOnInit() {}
}
