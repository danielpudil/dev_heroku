class Article < ApplicationRecord

  extend Enumerize

  enumerize :view, in: { show: 1, hidden: 2}, default: :hidden, scope: true, predicates: true
end
