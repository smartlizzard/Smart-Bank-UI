pipeline {
  agent any
  environment {
    registry = "https://insightacr768.azurecr.io"
    registryCredential = 'azureDockerRepo'
    dockerImage = ''
  }
  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/smartlizzard/Smart-Bank-UI.git'
      }
    }
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
    stage('Deploy Image') {
      steps{
         script {
            docker.withRegistry( registry, registryCredential ) {
            dockerImage.push()
          }
        }
      }
    }
    stage('Remove Unused docker image') {
      steps{
        sh "docker rmi $registry:$BUILD_NUMBER"
      }
    }
  }
}
