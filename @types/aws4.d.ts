declare module "aws4" {
    export function sign(
      options: {
        host: string;
        path: string;
        service: string;
        region: string;
        method: string;
        headers?: Record<string, string>;
      },
      credentials?: { accessKeyId: string; secretAccessKey: string }
    ): { headers: Record<string, string> };
  }
  