import { PromptService } from './prompt.service';
export declare class PromptController {
    private readonly PromptService;
    constructor(PromptService: PromptService);
    getPromptResponse(prompt: any): Promise<{
        message: any;
    }>;
}
