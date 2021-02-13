pipeline {
    agent any

    tools {nodejs "Node 14.15.4"}

    environment {
        CI = 'true'
    }

    stages {
        stage('Build') {
            steps {
              sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                //sh 'npm run test'
                echo 'Placeholder for running tests'
            }
        }
        stage('Deploy DEV') {
            when {
                branch 'dev'
            }
            steps {
                echo 'Deploy Dev placeholder for DEV branch'
            }
        }
        stage('Deploy PROD') {
            when {
                branch 'master'
            }
            steps {
                echo 'Deploy Stage placeholder for MASTER branch'
            }
        }
     }
}