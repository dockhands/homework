class User < ApplicationRecord
    has_many :posts, dependent: :nullify
    has_secure_password

    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  
    validates :name, presence: true
    validates :email, presence: true,
                      uniqueness: true,
                      format: VALID_EMAIL_REGEX

end

 