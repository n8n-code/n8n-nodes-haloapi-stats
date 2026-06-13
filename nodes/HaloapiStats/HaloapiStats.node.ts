import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class HaloapiStats implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Haloapi Stats',
                name: 'N8nDevHaloapiStats',
                icon: { light: 'file:./haloapi-stats.svg', dark: 'file:./haloapi-stats.dark.svg' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'API for player and match statistics.',
                defaults: { name: 'Haloapi Stats' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevHaloapiStatsApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
