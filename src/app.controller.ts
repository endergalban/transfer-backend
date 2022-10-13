import { Controller, Get, Redirect } from '@nestjs/common';

@Controller()
export class AppController {
  @Redirect('/api', 301)
  @Get()
  getHello(): string {
    return '';
  }
}
