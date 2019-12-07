pipeline {
  agent any
  environment {
    registry = "smartlizzard/smartbank-ui"
    registryCredential = 'dockerhub'
    dockerImage = ''
  }
  stages {
    stage('Clean Workspace'){
      steps {
        deleteDir()
      }
    }
    stage('Cloning Git') {
      steps {
        git branch: 'k8s-dev',
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
            docker.withRegistry( '', registryCredential ) {
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
