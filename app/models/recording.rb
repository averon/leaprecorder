class Recording < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true
end
