import { App } from './app';

function bootstrap() {
    const server: App = new App();
    server.startListening()
};

bootstrap();