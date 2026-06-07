pipeline {
    agent any

    environment {
        PATH = "/Users/wiit1/.nvm/versions/node/v22.19.0/bin:/usr/local/bin:/opt/homebrew/bin:${env.PATH}"
    }

    stages {
        stage('Build image') {
            steps {
                sh """
                    RECAPTCHA_SITE_KEY=\$(grep NEXT_PUBLIC_RECAPTCHA_SITE_KEY ~/.jenkins/containers/kni-web/.env | cut -d= -f2)
                    docker build \
                      --build-arg NEXT_PUBLIC_RECAPTCHA_SITE_KEY=\$RECAPTCHA_SITE_KEY \
                      -t kni-web .
                """
            }
        }

        stage('Deploy') {
            steps {
                sh """
                    docker stop kni-web || true
                    docker rm kni-web || true
                    docker run -d \
                      --name kni-web \
                      --restart unless-stopped \
                      -p 8081:3000 \
                      --env-file ~/.jenkins/containers/kni-web/.env \
                      kni-web
                """
            }
        }
    }
}
