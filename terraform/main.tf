provider "aws" {
  region = "eu-central-1"
}

resource "aws_s3_bucket" "studyboost_bucket" {
  bucket = "studyboost-bucket"
  
  tags = {
    Name        = "studyboost-bucket"
    Environment = "Dev"
  }
}

resource "aws_s3_bucket_policy" "studyboost_bucket_policy" {
  bucket = aws_s3_bucket.studyboost_bucket.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect = "Allow",
        Principal = "*",
        Action = [
          "s3:GetObject",
          "s3:PutObject",
          "s3:ListBucket"
        ],
        Resource = [
          "${aws_s3_bucket.studyboost_bucket.arn}",
          "${aws_s3_bucket.studyboost_bucket.arn}/*"
        ]
      }
    ]
  })
}

output "bucket_name" {
  value = aws_s3_bucket.studyboost_bucket.bucket
}