class AddNullToEmail < ActiveRecord::Migration[5.2]
  def change
    reversible do |direction|
      direction.up {
        User.where(email: nil).update_all(email: false)
      }
    end
    change_column :users, :email, :string, null: false, default: false
  end
end
