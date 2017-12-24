class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :home
      t.string :away
      t.string :title
      t.string :date
      t.string :time

      t.timestamps
    end
  end
end
