/*
provider "aws" {
  region = "us-west-2"
}
resource "aws_instance" "example" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  tags = {
    Name = "enterprise-app-instance"
  }
}
resource "aws_s3_bucket" "media_bucket" {
  bucket = "enterprise-app-media"
  acl    = "private"
}
resource "aws_db_instance" "postgres" {
  allocated_storage    = 20
  storage_type         = "gp2"
  engine               = "postgres"
  instance_class       = "db.t2.micro"
  name                 = "mydb"
  username             = "username"
  password             = "password"
  parameter_group_name = "default.postgres9.6"
}
*/