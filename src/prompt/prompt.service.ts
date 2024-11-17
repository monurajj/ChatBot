import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PromptService {
  async getPromptResponse(prompt) {
    const response = await axios.post(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCMcb2wx1sozgiNfqqiarxD3dy7dd3EyH0',
      { contents: [{ parts: [{ text: prompt }] }] },
    );
    return { message: response.data.candidates[0].content.parts[0].text };
  }
}
