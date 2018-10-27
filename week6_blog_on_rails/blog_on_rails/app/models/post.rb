class Post < ApplicationRecord

 
    # The title column must be present and unique.
    # The body column must be present and contain at least 50 characters.

    validates :title, presence: {message: "Title must be provided"},
    uniqueness: { case_sensitive: true }

    validates :body, presence: {message: "Body must be provided"}, length: { minimum: 50 }

end
