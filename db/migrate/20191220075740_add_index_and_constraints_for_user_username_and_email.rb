class AddIndexAndConstraintsForUserUsernameAndEmail < ActiveRecord::Migration[5.2]
  def change
    execute <<-SQL
      CREATE UNIQUE INDEX user_lower_username_idx ON users (LOWER(username));
      CREATE UNIQUE INDEX user_lower_email_idx ON users (LOWER(email));
    SQL
  end
end
