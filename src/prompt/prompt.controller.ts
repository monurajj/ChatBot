import { PromptService } from './prompt.service';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

@Controller('prompt')
export class PromptController {
  constructor(private readonly PromptService : PromptService){

  }

  @Post('')
  getPromptResponse(@Body() prompt:any){
    return this.PromptService.getPromptResponse(prompt.text)
  }
}
