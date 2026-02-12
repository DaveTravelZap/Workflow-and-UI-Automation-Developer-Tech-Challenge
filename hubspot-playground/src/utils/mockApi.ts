export interface HubSpotWebhookEvent {
  callbackId: string;
  origin: {
    portalId: number;
    actionDefinitionId: string;
    actionDefinitionVersion: number;
  };
  object: {
    objectId: number;
    objectType: string;
    properties: Record<string, any>;
  };
  fields: Record<string, any>;
}

export const mockHubSpotWebhook: HubSpotWebhookEvent = {
  callbackId: 'cb-123456789',
  origin: {
    portalId: 9876543,
    actionDefinitionId: 'custom-automation-action',
    actionDefinitionVersion: 1,
  },
  object: {
    objectId: 101,
    objectType: 'CONTACT',
    properties: {
      firstname: 'Brian',
      lastname: 'Halligan',
      email: 'brian@hubspot.com',
      company: 'HubSpot',
    },
  },
  fields: {
    sync_priority: 'high',
  },
};

export const simulateWorkflowAction = (onProgress: (percent: number) => void): Promise<HubSpotWebhookEvent> => {
  return new Promise((resolve) => {
    let progress = 0;
    onProgress(0);

    const interval = setInterval(() => {
      progress += 20;
      onProgress(progress);

      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => resolve(mockHubSpotWebhook), 500);
      }
    }, 1000); // Update every 1 second for 5 seconds
  });
};
