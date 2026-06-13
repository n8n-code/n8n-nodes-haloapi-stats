import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class HaloapiStatsApi implements ICredentialType {
        name = 'N8nDevHaloapiStatsApi';

        displayName = 'Haloapi Stats API';

        icon: Icon = { light: 'file:../nodes/HaloapiStats/haloapi-stats.svg', dark: 'file:../nodes/HaloapiStats/haloapi-stats.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Haloapi Stats API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
